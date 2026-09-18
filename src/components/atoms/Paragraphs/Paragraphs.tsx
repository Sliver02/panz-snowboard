export interface ParagraphsProps {
	/** Paragraphs separated by a blank line ("\n\n"), as written in translation strings. */
	text: string;
	className?: string;
}

export const Paragraphs = ({ text, className = "text--p-lg" }: ParagraphsProps) =>
	text.split("\n\n").map((paragraph) => (
		<p key={paragraph.slice(0, 24)} className={className}>
			{paragraph}
		</p>
	));
