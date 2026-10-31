import { site } from "@/lib/site";

export default function SocialLine() {
  return (
    <>
      <a href={site.social.instagram} target="_blank" rel="noopener">
        Instagram @smartpool237
      </a>{" "}
      &middot;{" "}
      <a href={site.social.tiktok} target="_blank" rel="noopener">
        TikTok @smart.pool8
      </a>
    </>
  );
}
