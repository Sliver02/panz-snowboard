import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Instagram } from "@/components/atoms/SocialIcons";
import { Section } from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import styles from "./InstagramFeed.module.scss";

const PROFILE_URL = "https://www.instagram.com/lorenz_panz/";
const HANDLE = "@lorenz_panz";

// ponytail: static frames, not the live Graph API. Instagram Basic Display was shut
// down in Dec 2024 and the Graph API needs a business account + reviewed app + a
// refreshed long-lived token. Swap this array for a fetch when that token exists.
//
// Order matters: the mosaic sizes tiles by position, so the most recent post goes
// first (largest tile, captioned). See $mosaic in InstagramFeed.module.scss.
const FRAMES = [
	"DDF02654",
	"photo_2025-03-17_10-45-40",
	"IMG_20241211_124221",
	"photo_2024-01-22_22-38-03",
	"20241121_100220",
	"photo_2024-12-17_12-03-48",
	"photo_2023-12-22_09-57-07",
	"_DSC4555-HDR",
	"photo_2025-11-28_10-54-31",
];

export const InstagramFeed = () => {
	const t = useTranslations("instagram");

	return (
		<div id="instagram">
			<Section>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} lg={10}>
							<SectionTitle text={t("title")} center highlight />
							<p
								className={classNames(
									styles.intro,
									"text--p-lg",
									"text--align-center"
								)}
							>
								{t("subtitle")}
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className={classNames(styles.collage)}>
								{FRAMES.map((frame, index) => (
									<Link
										key={frame + index}
										href={PROFILE_URL}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={t("tileAlt", { handle: HANDLE })}
										className={classNames(styles.tile)}
									>
										<span className={classNames(styles.frame)}>
											<Image
												className={classNames(styles.image)}
												src={`/images/${frame}.jpg`}
												blurDataURL={`/images/${frame}_placeholder.jpg`}
												placeholder="blur"
												alt=""
												sizes="(max-width: 769px) 50vw, 33vw"
												fill
											/>
											<span className={classNames(styles.overlay)}>
												<Instagram size={28} />
											</span>
										</span>
										{index === 0 && (
											<span className={classNames(styles.caption)}>
												<span className={classNames(styles.captionLabel)}>
													{t("latestLabel")}
												</span>
												{t("latestCaption")}
											</span>
										)}
									</Link>
								))}
							</div>
						</Col>
					</Row>
					<Row xsJustify={Justify.center}>
						<Col xs={12}>
							<Link
								href={PROFILE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className={classNames(styles.cta)}
							>
								<Instagram size={20} /> {HANDLE}
							</Link>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
};
