import Link from 'next/link';

export default function p404() {
  return (
    <div className="d-flex flex-column container aligns-items-center gap-3 my-5">
      <div className="fw-bold text-primary">
        <h2>УУЧЛААРАЙ, ТАНЫ ХАЙСАН ХУУДАС ОЛДСОНГҮЙ.</h2>
      </div>
      <div className="fw-bold text-secondary">
        <a>НҮҮР ХУУДАС РУУ БОЛОН ТУСЛАМЖ РУУ ШИЛЖИХ</a>
      </div>
      <div className="d-flex flex-row gap-2">
        <Link href="/">
            <button type="submit" className="btn btn-primary mb-5">Нүүр хуудас</button>
        </Link>
        <Link href="/contact">
            <button type="submit" className="btn btn-primary mb-5">Тусламж</button>
        </Link>
      </div>
    </div>
  );
}
