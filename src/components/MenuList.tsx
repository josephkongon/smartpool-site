import type { Locale } from "@/i18n/config";
import { formatPrice } from "@/lib/site";
import type { MenuItem } from "@/lib/types";

// Groups items by subcategory, keeping the order they appear in the data file.
function groupBySubcategory(items: MenuItem[]): [string, MenuItem[]][] {
  const groups = new Map<string, MenuItem[]>();
  for (const item of items) {
    if (item.available === false) continue;
    const key = item.subcategory || "Other";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return [...groups.entries()];
}

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

interface MenuListProps {
  items: MenuItem[];
  lang: Locale;
  /** Translated section names, keyed by the subcategory in the data file. */
  labels: Record<string, string>;
  jumpTo: string;
}

export default function MenuList({ items, lang, labels, jumpTo }: MenuListProps) {
  const groups = groupBySubcategory(items);
  const label = (key: string) => labels[key] ?? key;

  return (
    <>
      <nav className="menu-jump" aria-label={jumpTo}>
        {groups.map(([group]) => (
          <a key={group} href={`#${slug(group)}`}>
            {label(group)}
          </a>
        ))}
      </nav>

      <div className="menu-groups">
        {groups.map(([group, list]) => (
          <section className="rack-group reveal" key={group} id={slug(group)}>
            <h3>
              {label(group)}
              <span className="count">{list.length}</span>
            </h3>
            <ul className="menu-lines">
              {list.map((item) => (
                <li key={item.name}>
                  <span className="name">{item.name}</span>
                  <span className="leader" aria-hidden="true"></span>
                  <span className="price-tag">{formatPrice(item.price, lang)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
