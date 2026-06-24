"use client";

import { useCallback, useEffect, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

// Youth Capacity Building Training — a selection of valid training photos.
const IMAGES: GalleryImage[] = [
  { src: "/gallery/train-01.jpg", alt: "SMF Youth Capacity Building Training" },
  { src: "/gallery/train-03.jpg", alt: "Facilitator leading a session" },
  { src: "/gallery/train-08.jpg", alt: "Participants at the workshop" },
  { src: "/gallery/train-05.jpg", alt: "Trainer presenting" },
  { src: "/gallery/train-06.jpg", alt: "Workshop discussion" },
  // { src: "/gallery/train-11.jpg", alt: "Speaker addressing participants" },
  { src: "/gallery/train-19.jpg", alt: "Group session" },
  { src: "/gallery/train-02.jpg", alt: "Trainer engaging the room" },
  { src: "/gallery/train-10.jpg", alt: "Participant taking part" },
  { src: "/gallery/train-09.jpg", alt: "Presenter at the podium" },
  { src: "/gallery/train-16.jpg", alt: "Facilitator with participants" },
  { src: "/gallery/train-13.jpg", alt: "Young participants listening" },
  { src: "/gallery/train-21.jpg", alt: "Workshop in session" },
  { src: "/gallery/train-07.jpg", alt: "Trainer demonstrating" },
  { src: "/gallery/train-23.jpg", alt: "Participant at the training" },
  { src: "/gallery/train-12.jpg", alt: "Speaker presenting" },
  { src: "/gallery/train-15.jpg", alt: "Workshop attendees" },
  { src: "/gallery/train-17.jpg", alt: "Facilitator addressing the group" },
];

export default function ProgramGallery() {
  // null = closed; otherwise the index of the open image.
  const [current, setCurrent] = useState<number | null>(null);

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback(
    (delta: number) =>
      setCurrent((c) =>
        c === null ? c : (c + delta + IMAGES.length) % IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (current === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, close, step]);

  const open = current !== null;

  return (
    <>
      <section className="section gallery-sec" id="capacity-building">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">In the field</p>
            <h2 className="h1">Youth Capacity Building Training.</h2>
            <p className="lead maxw-60">
              Moments from our youth leadership and capacity-building workshops —
              equipping young people with the skills, confidence, and networks to
              lead.
            </p>
          </div>
          <div className="gallery">
            {IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className="g-item reveal"
                onClick={() => setCurrent(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <p className="gallery-note muted center reveal">
            A selection from the Youth Capacity Building Training. Click any photo
            to view larger.
          </p>
        </div>
      </section>

      <div
        className={`lightbox${open ? " open" : ""}`}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button className="lb-close" aria-label="Close" onClick={close}>
          ×
        </button>
        <button
          className="lb-nav lb-prev"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            step(-1);
          }}
        >
          ‹
        </button>
        {open && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            className="lb-img"
            src={IMAGES[current].src}
            alt={IMAGES[current].alt}
          />
        )}
        <button
          className="lb-nav lb-next"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            step(1);
          }}
        >
          ›
        </button>
        {open && (
          <div className="lb-count">
            {current + 1} / {IMAGES.length}
          </div>
        )}
      </div>
    </>
  );
}
