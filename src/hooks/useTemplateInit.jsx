import { useEffect } from "react";

// Safe, idempotent initializer for template vendor features used by the original
// OnePage template (GLightbox, Isotope, imagesLoaded). This keeps the template
// behavior working when React mounts or re-renders the DOM.
export default function useTemplateInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Init GLightbox if available
    try {
      if (typeof window.GLightbox === "function") {
        // create an instance if none exists (keep it idempotent)
        if (!window.__glightbox_instance) {
          window.__glightbox_instance = window.GLightbox({
            selector: ".glightbox",
          });
        }
      }
    } catch {
      // ignore if vendor not present
    }

    // Init isotope layout(s) if Isotope & imagesLoaded are available
    try {
      const IsotopeCtor =
        typeof window.Isotope !== "undefined" ? window.Isotope : null;
      const imagesLoadedFn =
        typeof window.imagesLoaded !== "undefined" ? window.imagesLoaded : null;

      if (IsotopeCtor && imagesLoadedFn) {
        document
          .querySelectorAll(".isotope-layout")
          .forEach(function (isotopeItem) {
            // Avoid double-init by storing on element
            if (isotopeItem.__isotope_inited) return;

            let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
            let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
            let sort =
              isotopeItem.getAttribute("data-sort") ?? "original-order";

            let initIsotope;
            // imagesLoaded may throw if vendor not present or selector missing
            imagesLoadedFn(
              isotopeItem.querySelector(".isotope-container"),
              function () {
                initIsotope = new IsotopeCtor(
                  isotopeItem.querySelector(".isotope-container"),
                  {
                    itemSelector: ".isotope-item",
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort,
                  }
                );
                isotopeItem.__isotope_instance = initIsotope;
                isotopeItem.__isotope_inited = true;
              }
            );

            // Attach filter click handlers idempotently
            isotopeItem
              .querySelectorAll(".isotope-filters li")
              .forEach(function (filters) {
                if (filters.__template_handler_attached) return;
                filters.addEventListener(
                  "click",
                  function () {
                    const active = isotopeItem.querySelector(
                      ".isotope-filters .filter-active"
                    );
                    if (active) active.classList.remove("filter-active");
                    this.classList.add("filter-active");
                    if (
                      isotopeItem.__isotope_instance &&
                      typeof isotopeItem.__isotope_instance.arrange ===
                        "function"
                    ) {
                      isotopeItem.__isotope_instance.arrange({
                        filter: this.getAttribute("data-filter"),
                      });
                    }
                    // refresh AOS if available
                    if (window.AOS && typeof window.AOS.refresh === "function")
                      window.AOS.refresh();
                  },
                  false
                );
                filters.__template_handler_attached = true;
              });
          });
      }
    } catch {
      // ignore isotope init errors
    }

    // Re-run navmenu scrollspy and mobile nav toggles if template main functions are available
    try {
      // Re-attach mobile nav toggles
      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      if (mobileNavToggleBtn && !mobileNavToggleBtn.__click_attached) {
        const mobileNavToogle = function () {
          document.querySelector("body").classList.toggle("mobile-nav-active");
          mobileNavToggleBtn.classList.toggle("bi-list");
          mobileNavToggleBtn.classList.toggle("bi-x");
        };
        mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
        mobileNavToggleBtn.__click_attached = true;
      }

      // Hide mobile nav on same-page/hash links
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        if (navmenu.__close_on_click_attached) return;
        navmenu.addEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            const btn = document.querySelector(".mobile-nav-toggle");
            if (btn) btn.click();
          }
        });
        navmenu.__close_on_click_attached = true;
      });
    } catch {
      // ignore
    }

    // No cleanup required; handlers are guarded by flags to be idempotent
  }, []);
}
