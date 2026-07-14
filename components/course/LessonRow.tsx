import Link from "next/link";
import { Play, Lock } from "@phosphor-icons/react/dist/ssr";
import type { Lesson } from "@/content/courseCurriculum";

// One curriculum row. Free lessons link to their preview page; locked
// lessons show the lock and route intent to the enroll card.
export default function LessonRow({ lesson }: { lesson: Lesson }) {
  if (lesson.free && lesson.slug) {
    return (
      <li className="border-b border-hair last:border-b-0">
        <Link
          href={`/products/preview/${lesson.slug}`}
          className="group flex items-center gap-3 px-6 py-3.5 transition-colors hover:bg-white/50"
        >
          <Play size={15} weight="fill" className="shrink-0 text-red-pen" />
          <span className="flex-1 text-sm text-ink group-hover:underline group-hover:decoration-red-pen group-hover:decoration-2 group-hover:underline-offset-4">
            {lesson.title}
          </span>
          <span className="rounded border-[1.5px] border-red-pen px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-wide text-red-pen">
            Free preview
          </span>
          <span className="w-14 text-right text-xs text-sub">{lesson.duration}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 border-b border-hair px-6 py-3.5 last:border-b-0">
      <Lock size={15} weight="fill" className="shrink-0 text-sub/60" />
      <span className="flex-1 text-sm text-sub">{lesson.title}</span>
      <span className="w-14 text-right text-xs text-sub/70">{lesson.duration}</span>
    </li>
  );
}
