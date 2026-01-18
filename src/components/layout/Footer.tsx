import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="bg-[#121212]">
      <div className="mx-auto max-w-360 py-3 px-20 flex justify-between items-center">
        <div className="w-full px-20 pt-20 pb-7.5">
          <div className="flex items-start justify-between">
            <div className="p-2.5">
              <p className="cta-logo">
                <span>Brumes</span>
                <span className="text-primary">.</span>
                <span>ai</span>
              </p>
            </div>
            <div className="grid grid-cols-4 gap-16">
              <div className="flex flex-col gap-4">
                <p className="footer-item-title">Products</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className=" footer-item-label">
                    Features
                  </a>
                  <a href="#" className=" footer-item-label">
                    Solutions
                  </a>
                  <a href="#" className=" footer-item-label">
                    Pricing
                  </a>
                  <a href="#" className=" footer-item-label">
                    Updates
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="footer-item-title">Company</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className=" footer-item-label">
                    About us
                  </a>
                  <a href="#" className=" footer-item-label">
                    Career
                  </a>
                  <a href="#" className=" footer-item-label">
                    News
                  </a>
                  <a href="#" className=" footer-item-label">
                    Contact
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="footer-item-title">Resources</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className=" footer-item-label">
                    Docs
                  </a>
                  <a href="#" className=" footer-item-label">
                    Blog
                  </a>
                  <a href="#" className=" footer-item-label">
                    Changelog
                  </a>
                  <a href="#" className=" footer-item-label">
                    Support
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="footer-item-title">Social</p>
                <div className="flex flex-col gap-3">
                  <a href="#" className=" footer-item-label">
                    x.com
                  </a>
                  <a href="#" className=" footer-item-label">
                    LinkedIn
                  </a>
                  <a href="#" className=" footer-item-label">
                    Facebook
                  </a>
                  <a href="#" className=" footer-item-label">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-18.75 px-2.5 flex w-full items-end justify-between">
            <div className="flex items-center justify-center gap-3">
              <p>© {new Date().getFullYear()} Brumes.ai.</p>

              <div className="size-0.5  bg-[#7F7F7F]"></div>
              <a href="#" className="hover:text-accent">
                Terms
              </a>
              <div className="size-0.5 bg-[#7F7F7F]"></div>
              <a href="#" className="hover:text-accent">
                Privacy
              </a>
            </div>
            <Badge variant="secondary">SYSTEM_OPERATIONAL</Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
