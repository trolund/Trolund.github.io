import DateFormatter from './date-formatter';
import Link from 'next/link';
import { Author } from '../types/blogPost';
import cn from 'classnames';
import Card from './card';
import Ship from './ship';

interface HeroPostProps {
  title: string;
  coverImage: string;
  date: Date;
  excerpt?: string;
  author: Author;
  slug: string;
  tags?: string[];
  technologies?: string[];
  className?: string;
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  className,
  technologies,
}: HeroPostProps) {
  return (
    <section>
      <Card className={className}>
        <div className="px-3.5 py-2.5">
          <div className="mb-5">
            <div
              className={cn('shadow-small', {
                'transition-shadow duration-200 hover:shadow-medium': slug,
              })}
              style={{
                backgroundImage: `url(${coverImage})`,
                height: '300px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                borderRadius: 'var(--border-radius)',
              }}
            ></div>
          </div>
          <div>
            <div>
              <h3 className="mb-3 text-3xl leading-snug md:text-6xl md:leading-tight">
                <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
                  {title}
                </Link>
              </h3>
              <div className="mb-4 text-lg md:mb-0">
                <div className="mb-4 basis-1/2 text-base font-extralight italic">
                  <DateFormatter date={date} />
                </div>
              </div>
              <div className="flex flex-wrap">
                {technologies &&
                  technologies.map((t, i) => <Ship key={`${i}-${slug}`} value={t} />)}
              </div>
            </div>
            <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
