import React, { useState, useCallback } from "react";

const FAQ_ITEMS = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // match template: first item open

  const toggle = useCallback(
    (index) => {
      setOpenIndex((prev) => (prev === index ? -1 : index));
    },
    [setOpenIndex]
  );

  const onKey = useCallback(
    (e, index) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(index);
      }
    },
    [toggle]
  );

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {FAQ_ITEMS.map((it, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isOpen ? "faq-active" : ""}`}
                  >
                    <h3
                      tabIndex={0}
                      role="button"
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        // Prevent any non-React DOM listeners (template JS) from
                        // also toggling the class and conflicting with React state.
                        if (
                          e &&
                          e.nativeEvent &&
                          typeof e.nativeEvent.stopImmediatePropagation ===
                            "function"
                        ) {
                          e.nativeEvent.stopImmediatePropagation();
                        }
                        toggle(idx);
                      }}
                      onKeyDown={(e) => {
                        if (
                          e &&
                          e.nativeEvent &&
                          typeof e.nativeEvent.stopImmediatePropagation ===
                            "function"
                        ) {
                          e.nativeEvent.stopImmediatePropagation();
                        }
                        onKey(e, idx);
                      }}
                    >
                      {it.question}
                    </h3>
                    <div className="faq-content">
                      <p>{it.answer}</p>
                    </div>
                    <i
                      className="faq-toggle bi bi-chevron-right"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
