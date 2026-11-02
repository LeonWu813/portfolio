import BulletList from "./BulletList";
import { projectOfSlide, type ProjectKey, type Slide, type SlideId, type Visual } from "./deck";
import FlowChips from "./FlowChips";
import Menu from "./Menu";
import type { MenuHintState } from "./navigation";
import styles from "./slideshow.module.css";
import Timeline from "./Timeline";
import Workflow from "./Workflow";

interface SlideViewProps {
  slideId: SlideId;
  slide: Slide;
  highlighted: ProjectKey | null;
  menuHint: MenuHintState | null;
  onOpen: (slideId: SlideId) => void;
}

function TitleBlock({ title }: { title: string }) {
  return (
    <>
      <div className={styles.tick} />
      <h1 id="ss-slide-title" className={styles.title}>
        {title}
      </h1>
    </>
  );
}

function Numbers({ numbers }: { numbers: readonly (readonly [string, string])[] }) {
  return (
    <div className={styles.numbers}>
      {numbers.map(([value, label]) => (
        <div key={label} className={styles.number}>
          <div className={styles.numberValue}>{value}</div>
          <div className={styles.numberLabel}>{label}</div>
        </div>
      ))}
    </div>
  );
}

function VisualView({ visual }: { visual: Visual }) {
  if (visual.type === "phones") {
    return (
      <div className={styles.phones}>
        {visual.items.map((item) => (
          <div key={item.src} className={`${styles.phone} ${styles.imageFrame}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className={`${styles.wide} ${visual.framed ? styles.imageFrame : ""}`}
      style={{ aspectRatio: visual.ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.image} src={visual.src} alt={visual.alt} />
    </div>
  );
}

function PositionCue({ slideId }: { slideId: SlideId }) {
  const project = projectOfSlide(slideId);
  if (!project) return null;
  const position = project.slideIds.indexOf(slideId) + 1;
  const total = project.slideIds.length;
  return (
    <div className={styles.cue}>
      <span className={styles.cueName}>{project.name}</span>
      <span className={styles.cueSep} />
      <span className={styles.cuePosition} aria-hidden="true">
        {position} / {total}
      </span>
      <span className={styles.srOnly}>
        {position} of {total}
      </span>
    </div>
  );
}

function SlideBody({ slide, highlighted, menuHint, onOpen }: Omit<SlideViewProps, "slideId">) {
  switch (slide.kind) {
    case "intro":
      return (
        <div className={`${styles.content} ${styles.introContent}`}>
          <div className={styles.tick} />
          <h1 id="ss-slide-title" className={styles.hero}>
            {slide.title}
          </h1>
          <div className={styles.introTitles}>
            {slide.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      );
    case "timeline":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <Timeline entries={slide.entries} onOpen={onOpen} />
        </div>
      );
    case "job":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <div className={styles.subtitle}>{slide.subtitle}</div>
          <Numbers numbers={slide.numbers} />
        </div>
      );
    case "numbers":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <Numbers numbers={slide.numbers} />
        </div>
      );
    case "photo":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <div className={styles.photos}>
            {slide.photos.map((photo) => (
              <figure key={photo.src}>
                <div className={`${styles.photoBox} ${styles.imageFrame}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.image} src={photo.src} alt={photo.alt} />
                </div>
                <figcaption className={styles.caption}>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    case "menu":
      return <Menu title={slide.title} highlighted={highlighted} hint={menuHint} onOpen={onOpen} />;
    case "stack":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <div className={`${styles.role} ${styles.bodyGap}`}>{slide.role}</div>
          <ul className={styles.chips}>
            {slide.stack.map((item) => (
              <li key={item} className={styles.chip}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "bullets":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <div className={styles.bodyGap}>
            <BulletList items={slide.bullets} />
          </div>
        </div>
      );
    case "shot":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <div className={styles.split}>
            <div className={styles.splitText}>
              <BulletList items={slide.bullets} />
            </div>
            <div className={styles.visual}>
              <VisualView visual={slide.visual} />
            </div>
          </div>
        </div>
      );
    case "rolegrid":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <dl className={styles.roleGrid}>
            {slide.roles.map(([name, description]) => (
              <div key={name} className={styles.roleCell}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
    case "workflow":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <Workflow />
        </div>
      );
    case "flow":
      return (
        <div className={styles.content}>
          <TitleBlock title={slide.title} />
          <FlowChips chips={slide.flow} />
          <div className={styles.bodyGap}>
            <BulletList items={slide.bullets} />
          </div>
        </div>
      );
  }
}

export default function SlideView({ slideId, ...rest }: SlideViewProps) {
  return (
    <section
      className={styles.slide}
      role="group"
      aria-roledescription="slide"
      aria-labelledby="ss-slide-title"
    >
      <SlideBody {...rest} />
      <PositionCue slideId={slideId} />
    </section>
  );
}
