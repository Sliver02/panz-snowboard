"use client";
import { BaseProps } from "@/common/globalInterfaces";
import { RouteEnum } from "@/common/routeEnum";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";

export interface HeaderProps extends BaseProps {
  prot?: string;
}

export interface NavItem {
  label: string;
  url?: string;
  children?: NavItem[];
}

const Header = ({ className }: HeaderProps) => {
  const t = useTranslations("header");

  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: t("home"),
      url: RouteEnum.HOME,
    },
    {
      label: t("about"),
      url: RouteEnum.ABOUT,
    },
    {
      label: t("activities"),
      children: [
        {
          label: t("snowboard"),
          url: RouteEnum.SNOWBOARD,
        },
        {
          label: t("telemark"),
          url: RouteEnum.TELEMARK,
        },
        {
          label: t("mountainBike"),
          url: RouteEnum.MOUNTAIN_BIKE,
        },
      ],
    },
    {
      label: t("locations"),
      url: RouteEnum.HOME + "#locations",
    },
  ];

  return (
    <div className={classNames(className, styles.header)}>
      <div className={classNames(styles.logoContainer)}>
        <Link className={classNames(styles.navbar__button)} href="." replace>
          <Image
            alt="SMUP Yoga - Dolomites"
            src={"smup_logo_white.svg"}
            priority
            fill
          />
        </Link>
      </div>
      <div className={classNames(styles.navbar)}>
        {navItems.map((item, index) => (
          <div key={index} className={styles.navItem}>
            {item.children ? (
              <div
                className={styles.dropdown}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={classNames(
                    styles.navbar__button,
                    styles.dropdownButton
                  )}
                >
                  {item.label}
                  <MdKeyboardArrowDown size={20} />
                </button>
                <div
                  className={classNames(styles.dropdownMenu, {
                    [styles.dropdownMenuOpen]: openDropdown === item.label,
                  })}
                >
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.url!}
                      className={styles.dropdownItem}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.url?.startsWith("#") ? (
              <a className={classNames(styles.navbar__button)} href={item.url}>
                {item.label}
              </a>
            ) : (
              <Link
                className={classNames(styles.navbar__button)}
                href={item.url!}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div
        className={classNames(styles.hamburger)}
        onClick={() => setOpenMenu((openMenu) => !openMenu)}
      >
        <MdMenu size={32} />
      </div>

      <div
        className={classNames(styles.menu, openMenu && styles["menu--open"])}
      >
        {navItems.map((item, index) => (
          <div key={index} className={styles.mobileNavItem}>
            {item.children ? (
              <>
                <div className={styles.mobileDropdownLabel}>{item.label}</div>
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.url!}
                    className={classNames(
                      styles["menu__button"],
                      styles.mobileSubItem
                    )}
                    onClick={() => setOpenMenu(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </>
            ) : item.url?.startsWith("#") ? (
              <a
                className={classNames(styles["menu__button"])}
                href={item.url}
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                className={classNames(styles["menu__button"])}
                href={item.url!}
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
