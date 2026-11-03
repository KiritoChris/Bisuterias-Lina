/*
  BISUTERÍAS CON LINA
  Se conserva el catálogo original, los nombres, las descripciones y las rutas de imágenes.
  El número de WhatsApp ya estaba configurado en el proyecto original.
  Se agregó selección múltiple de productos para preguntar por una o varias piezas.
*/
const WHATSAPP_NUMBER = "573004761309";

const products = [
  // --- ARETES ---
  { name: "Alegría en cada detalle", category: "aretes", tag: "Pieza especial", description: "Diseños artesanales que iluminan tu estilo.", image: "/assets/img/503208871_18050676131594623_7662177066940136102_n.webp" },
  { name: "Color que enamora", category: "aretes", tag: "Hecho a mano", description: "Aretes llenos de color y personalidad.", image: "/assets/img/482074297_18039501191594623_6271825983827711921_n.webp" },
  { name: "Geometría con encanto", category: "aretes", tag: "Diseño artesanal", description: "Formas llamativas para expresarte sin palabras.", image: "/assets/img/503325929_18050470460594623_7997058639317396413_n.webp" },
  { name: "Destellos de plata", category: "aretes", tag: "Brillo sutil", description: "Elegancia minimalista ideal para el día a día.", image: "/assets/img/481834221_18039501608594623_7674906717867709158_n.webp" },
  { name: "Armonía natural", category: "aretes", tag: "Línea orgánica", description: "Inspirados en texturas fluidas de la naturaleza.", image: "/assets/img/481849490_18039522515594623_6808382824545760673_n.webp" },
  { name: "Esencia dorada", category: "aretes", tag: "Colección lujo", description: "Acentos sofisticados con acabados resplandecientes.", image: "/assets/img/481867764_18039522206594623_3115290661853299787_n.webp" },
  { name: "Sinfonía ligera", category: "aretes", tag: "Con movimiento", description: "Aretes colgantes que aportan frescura a tu look.", image: "/assets/img/483346071_18040824074594623_5733392329287749847_n.webp" },
  { name: "Vanguardia mística", category: "aretes", tag: "Estilo único", description: "Líneas asimétricas para quienes marcan tendencia.", image: "/assets/img/485440332_18042170306594623_8984562974570282581_n.jpg" },
  { name: "Tierra y mar", category: "aretes", tag: "Inspiración marina", description: "Cuentas pulidas que recuerdan la costa y la arena.", image: "/assets/img/485449993_18042166322594623_2329185951259838698_n.jpg" },
  { name: "Atardecer bohemio", category: "aretes", tag: "Estilo boho", description: "Detalles cálidos perfectos para una tarde relajada.", image: "/assets/img/486063863_18042168980594623_4228554384881702948_n.jpg" },
  { name: "Destello de medianoche", category: "aretes", tag: "Elegancia nocturna", description: "El toque definitivo de glamour para tus noches de gala.", image: "/assets/img/503500647_18050476757594623_2118485643078630505_n.webp" },
  { name: "Relieves de autor", category: "aretes", tag: "Premium", description: "Cada ángulo ofrece una textura y un reflejo diferente.", image: "/assets/img/503848234_18050474867594623_847177062542662116_n.webp" },
  { name: "Amuletos urbanos", category: "aretes", tag: "Urbano chic", description: "Estructuras modernas para llevar el arte en tu día a día.", image: "/assets/img/619090445_1370867357653170_2451642380720815319_n.jpg" },
  { name: "Gotas de cristal", category: "aretes", tag: "Estilo clásico", description: "Delicadeza atemporal que complementa cualquier facción.", image: "/assets/img/629736256_18079549757594623_8773531845406542190_n.jpg" },
  { name: "Simetría perfecta", category: "aretes", tag: "Estilo minimal", description: "Líneas puras que equilibran tu rostro con sutileza.", image: "/assets/img/619615314_18076534511594623_3049213682671226235_n.jpg" },
  { name: "Secreto botánico", category: "aretes", tag: "Inspiración floral", description: "Formas inspiradas en hojas y pétalos esculpidos.", image: "/assets/img/696515762_18090603866594623_271890284781680453_n.jpg" },

  // --- COLLARES ---
  { name: "Un toque de naturaleza", category: "collares", tag: "Favorito", description: "Detalles inspirados en formas y colores naturales.", image: "/assets/img/485522108_18042167375594623_8544639872248080015_n.jpg" },
  { name: "Capas delicadas", category: "collares", tag: "Para combinar", description: "Un acabado delicado para tus looks favoritos.", image: "/assets/img/656429244_18098080082065873_4990896371333389667_n.jpg" },
  { name: "Eslabones del alba", category: "collares", tag: "Estilo diario", description: "Gargantilla ligera hecha para brillar bajo el sol.", image: "/assets/img/624184889_18097410943907845_51214420313893780_n.jpg" },
  { name: "Talismán eterno", category: "collares", tag: "Vintage", description: "Una pieza con alma antigua y diseño contemporáneo.", image: "/assets/img/619604230_17936554557077516_6928891910992411717_n.jpg" },
  { name: "Cascada sutil", category: "collares", tag: "Sofisticado", description: "Líneas entrelazadas que caen con suavidad y gracia.", image: "/assets/img/619069610_18076540394594623_8308377523901189544_n.jpg" },
  { name: "Fusión majestuosa", category: "collares", tag: "Declaración", description: "El centro de atención ideal para transformar tu vestimenta.", image: "/assets/img/481089513_18038928854594623_6436624178864637742_n.jpg" },

  // --- PULSERAS ---
  { name: "Pequeños tesoros", category: "pulseras", tag: "Color y encanto", description: "Pulseras para llevar tu estilo a todas partes.", image: "/assets/img/485280713_18042169358594623_6932913377998209340_n.jpg" },
  { name: "Lazos de unión", category: "pulseras", tag: "Hecho con amor", description: "Tejidos trenzados que celebran los momentos compartidos.", image: "/assets/img/502762535_18049877855594623_3478481961988322607_n.webp" },
  { name: "Brazalete destellos", category: "pulseras", tag: "Brillo sutil", description: "Cuentas finas metálicas que visten tu muñeca con finura.", image: "/assets/img/504189038_18050674118594623_2744028886662702192_n.webp" },
  { name: "Destellos del desierto", category: "pulseras", tag: "Tonos tierra", description: "Combinación de colores cálidos y texturas rústicas.", image: "/assets/img/626557685_18089897768514192_2197970814284035510_n.jpg" },
  { name: "Esmeralda mística", category: "pulseras", tag: "Favorito", description: "Detalles en tonos verdosos que evocan frescura orgánica.", image: "/assets/img/700208041_18090602966594623_2106089944613614227_n.jpg" },
  { name: "Cuentas de luz", category: "pulseras", tag: "Brillo diario", description: "La pulsera perfecta para combinar con tus accesorios favoritos.", image: "/assets/img/773800168_18103205876594623_708677079547488027_n.jpg" },

  // --- OTROS ---
  { name: "Una historia de color", category: "otros", tag: "Único", description: "Una creación especial que no pasa desapercibida.", image: "/assets/img/619241187_18076532051594623_8286351135683970167_n.jpg" },
  { name: "Detalles para regalar", category: "otros", tag: "Para sorprender", description: "Un regalo con personalidad y mucho cariño.", image: "/assets/img/637715716_18080650667594623_8183712137949794839_n.jpg" },
  { name: "Recuerdos compartidos", category: "otros", tag: "Con significado", description: "Un obsequio lleno de intención para alguien inolvidable.", image: "/assets/img/651955255_18082847861594623_1690350922672667174_n.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil compartido por todas las páginas.
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".navigation");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    }));
  }

  // Enlace del pie: vuelve arriba de la página actual.
  document.querySelectorAll(".back-top").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  function whatsappUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  // Catálogo: solo se activa en /coleccion/.
  const grid = document.querySelector("#product-grid");
  const filters = document.querySelectorAll(".filter");
  const selectionBar = document.querySelector("#selection-bar");
  const selectionCount = document.querySelector("#selection-count");
  const selectionClear = document.querySelector("#selection-clear");
  const selectionAsk = document.querySelector("#selection-ask");
  const selectedProducts = new Set();

  function productCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-pressed", "false");
    article.setAttribute("aria-label", `Seleccionar: ${product.name}`);

    const photo = document.createElement("div");
    photo.className = "product-photo";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    img.onerror = () => { photo.style.background = "#f3e9e2"; img.style.display = "none"; };

    img.style.cursor = "zoom-in";

    img.addEventListener("click", event => {
      event.stopPropagation();
      openLightbox(product.image);
    });

    const check = document.createElement("span");
    check.className = "select-check";
    check.setAttribute("aria-hidden", "true");
    check.textContent = "✓";

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = product.tag;
    photo.append(img, tag, check);

    const info = document.createElement("div");
    info.className = "product-info";
    const title = document.createElement("h3");
    title.textContent = product.name;
    const desc = document.createElement("p");
    desc.textContent = product.description;
    const link = document.createElement("a");
    link.className = "product-link";
    link.textContent = "Me interesa esta pieza ↗";
    link.href = whatsappUrl(`Hola Lina, me interesa esta pieza: ${product.name}. ¿Me compartes más información?`);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.addEventListener("click", event => event.stopPropagation());

    info.append(title, desc, link);
    article.append(photo, info);

    const sync = () => {
      const selected = selectedProducts.has(product.name);
      article.classList.toggle("selected", selected);
      article.setAttribute("aria-pressed", String(selected));
      article.setAttribute("aria-label", `${selected ? "Quitar selección" : "Seleccionar"}: ${product.name}`);
    };

    const toggle = () => {
      if (selectedProducts.has(product.name)) {
        selectedProducts.delete(product.name);
      } else {
        selectedProducts.add(product.name);
      }
      syncSelectionUI();
    };

    article.addEventListener("click", toggle);
    article.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });

    article._syncSelected = sync;
    sync();
    return article;
  }

  function syncSelectionUI() {
    const total = selectedProducts.size;
    if (selectionBar) {
      selectionBar.classList.toggle("visible", total > 0);
      selectionBar.setAttribute("aria-hidden", String(total === 0));
    }
    if (selectionCount) {
      if (total === 0) {
        selectionCount.textContent = "0 seleccionados";
      } else {
        selectionCount.innerHTML = `<b>${total}</b> ${total === 1 ? "seleccionado" : "seleccionados"}`;
      }
    }
    if (selectionAsk) {
      if (total === 1) {
        const name = [...selectedProducts][0];
        selectionAsk.textContent = "Preguntar por esta pieza ↗";
        selectionAsk.href = whatsappUrl(`Hola Lina, me interesa esta pieza: ${name}. ¿Me compartes más información?`);
      } else if (total > 1) {
        selectionAsk.textContent = `Preguntar por ${total} productos ↗`;
        const list = [...selectedProducts].map((name, i) => `${i + 1}. ${name}`).join("\n");
        selectionAsk.href = whatsappUrl(`Hola Lina, me interesan estas piezas:\n${list}\n¿Me compartes más información?`);
      }
    }
    document.querySelectorAll(".product-card").forEach(card => card._syncSelected && card._syncSelected());
  }

  function renderProducts(filter = "todos") {
    if (!grid) return;
    grid.replaceChildren();
    const visible = products.filter(product => filter === "todos" || product.category === filter);
    visible.forEach((product, index) => {
      const card = productCard(product);
      card.style.animationDelay = `${index * 45}ms`;
      grid.append(card);
    });
    syncSelectionUI();
  }

  // ===== LIGHTBOX — VER PIEZA EN GRANDE =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src) {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });

  if (grid) {
    filters.forEach(button => button.addEventListener("click", () => {
      filters.forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProducts(button.dataset.filter || "todos");
    }));

    if (selectionClear) {
      selectionClear.addEventListener("click", () => {
        selectedProducts.clear();
        syncSelectionUI();
      });
    }

    renderProducts();
  }

  // Botón de contacto general; solo existe en /contacto/.
  const contactLink = document.querySelector("#contact-link");
  if (contactLink) {
    if (WHATSAPP_NUMBER) {
      contactLink.href = whatsappUrl("Hola Lina, quisiera conocer más sobre sus bisuterías y talleres.");
      contactLink.target = "_blank";
      contactLink.rel = "noopener noreferrer";
    } else {
      contactLink.href = "mailto:?subject=" + encodeURIComponent("Consulta sobre Bisuterías con Lina") +
        "&body=" + encodeURIComponent("Hola Lina, quisiera conocer más sobre sus bisuterías y talleres.");
    }
  }

  // Carrusel original de la imagen principal; solo existe en la página de inicio.
  const heroImage = document.querySelector("#hero-img");
  if (heroImage) {
    const heroImages = [
      "/assets/img/624184889_18097410943907845_51214420313893780_n.jpg",
      "/assets/img/656429244_18098080082065873_4990896371333389667_n.jpg",
      "/assets/img/bisuterias_LM.jpeg"

    ];
    let currentImage = 0;
    window.setInterval(() => {
      currentImage = (currentImage + 1) % heroImages.length;
      heroImage.src = heroImages[currentImage];
    }, 3000);
  }
});

/*
  BISUTERÍAS CON LINA
  Carrusel Coverflow exclusivo de la página Nuestra esencia.
  Archivo independiente: no modifica ni interfiere con el catálogo existente.
*/
document.addEventListener("DOMContentLoaded", () => {
  const coverflow = document.querySelector("#essence-coverflow");
  if (!coverflow) return;

  const slides = [...coverflow.querySelectorAll(".coverflow-slide")];
  const dots = [...coverflow.querySelectorAll(".coverflow-pagination button")];
  const previous = coverflow.querySelector(".coverflow-prev");
  const next = coverflow.querySelector(".coverflow-next");

  if (!slides.length) return;

  let activeIndex = 0;
  let touchStartX = 0;

  function renderCoverflow() {
    const total = slides.length;

    slides.forEach((slide, index) => {
      slide.classList.remove(
        "is-active", "is-prev", "is-next",
        "is-hidden-left", "is-hidden-right"
      );

      const offset = (index - activeIndex + total) % total;

      if (offset === 0) {
        slide.classList.add("is-active");
        slide.setAttribute("aria-hidden", "false");
      } else if (offset === 1 || offset === -(total - 1)) {
        slide.classList.add("is-next");
        slide.setAttribute("aria-hidden", "false");
      } else if (offset === total - 1 || offset === -1) {
        slide.classList.add("is-prev");
        slide.setAttribute("aria-hidden", "false");
      } else if (offset <= total / 2) {
        slide.classList.add("is-hidden-right");
        slide.setAttribute("aria-hidden", "true");
      } else {
        slide.classList.add("is-hidden-left");
        slide.setAttribute("aria-hidden", "true");
      }
    });

    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  function goTo(index) {
    activeIndex = (index + slides.length) % slides.length;
    renderCoverflow();
  }

  previous?.addEventListener("click", () => goTo(activeIndex - 1));
  next?.addEventListener("click", () => goTo(activeIndex + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goTo(index));
  });

  coverflow.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  });

  coverflow.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  coverflow.addEventListener("touchend", event => {
    const difference = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(difference) < 45) return;
    goTo(activeIndex + (difference < 0 ? 1 : -1));
  }, { passive: true });

  renderCoverflow();
});
