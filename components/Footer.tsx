import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export function Footer() {

  return (
    <footer className="border-t border-white/10 bg-navy py-10 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:justify-between md:px-6 lg:px-8">
        <div className="space-y-3 md:max-w-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            CMSMUN &apos;26
          </h3>
          <p className="text-sm text-slate-300">
            City Montessori School, Aliganj Campus I presents the fifth edition
            of its flagship Model United Nations conference.
          </p>
        </div>

        <div className="grid flex-1 gap-8 text-sm sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-cyan-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="text-slate-300 hover:text-cyan-300"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  className="text-slate-300 hover:text-cyan-300"
                >
                  Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/secretariat"
                  className="text-slate-300 hover:text-cyan-300"
                >
                  Secretariat
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-cyan-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Contact
            </h4>
            <p className="text-sm text-slate-300">
              City Montessori School, Aliganj Campus I
              <br />
              Lucknow, Uttar Pradesh, India
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Email:{" "}
              <a
                href="mailto:mun.aliganj1@cmseducation.org"
                className="hover:text-cyan-300"
              >
                mun.aliganj1@cmseducation.org
              </a>
              <br />
              Phone: +91 522 2320897
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
              Follow
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cms.aliganj1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-navy-light/70 text-slate-300 transition hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/city-montessori-school-model-united-nations/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-navy-light/70 text-slate-300 transition hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4">
        <p className="text-center text-xs text-slate-400">
          Website designed by{" "}
          <a
            href="https://www.linkedin.com/in/satveek-gupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 transition"
          >
            Satveek Gupta
          </a>
        </p>
      </div>
    </footer>
  );
}