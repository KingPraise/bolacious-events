"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

const galleryImages = [
  { id: 1, src: "/gallery/wedding-setup.jpeg", alt: "Elegant Wedding Setup", span: "aspect-[4/3]" },
  { id: 2, src: "/gallery/event-decor.jpeg", alt: "Luxury Event Decor", span: "aspect-square" },
  { id: 3, src: "/gallery/ushers-team.jpeg", alt: "Professional Ushers Team", span: "aspect-[3/4]" },
  { id: 4, src: "/gallery/ushers-1.jpeg", alt: "Usher Assisting Guests", span: "aspect-square" },
  { id: 5, src: "/gallery/food-egusi-bowl.jpeg", alt: "Egusi Soup with Assorted Meat", span: "aspect-square" },
  { id: 6, src: "/gallery/food-small-chops-tray.jpeg", alt: "Small Chops Tray", span: "aspect-[4/3]" },
  { id: 7, src: "/gallery/catering-2.jpeg", alt: "Small Chops and Appetizers", span: "aspect-square" },
  { id: 8, src: "/gallery/cake-1.jpeg", alt: "Exquisite Dessert Table", span: "aspect-[3/4]" },
  { id: 9, src: "/gallery/event-table-setting.jpeg", alt: "Luxurious Table Setting", span: "aspect-[4/3]" },
  { id: 10, src: "/gallery/event-stage.jpeg", alt: "Grand Event Stage", span: "aspect-[16/9]" },
  { id: 11, src: "/gallery/ushers-posing.jpeg", alt: "Corporate Event Ushers", span: "aspect-square" },
  { id: 12, src: "/gallery/cake-2.jpeg", alt: "Beautiful Wedding Cake", span: "aspect-[4/3]" },
  { id: 13, src: "/gallery/food-skillets.jpeg", alt: "Nigerian Food Platters", span: "aspect-square" },
  { id: 14, src: "/gallery/food-rice-plate.jpeg", alt: "Gourmet Rice & Fish Plate", span: "aspect-[3/4]" },
  { id: 15, src: "/gallery/small-chops.jpeg", alt: "Delicious Small Chops", span: "aspect-square" },
  { id: 16, src: "/gallery/food-egusi-skillet.jpeg", alt: "Egusi Served in Skillet", span: "aspect-[4/3]" },
  { id: 17, src: "/gallery/food-small-chops-2.jpeg", alt: "Assorted Small Chops", span: "aspect-square" },
  { id: 18, src: "/gallery/event-table.jpeg", alt: "Event Table Arrangement", span: "aspect-[3/4]" },
  { id: 19, src: "/gallery/catering-1.jpeg", alt: "Catering Spread", span: "aspect-[4/3]" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-secondary"></span>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Portfolio
            </span>
            <span className="w-8 h-px bg-secondary"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Moments Captured
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Take a glimpse into the beautiful memories we've helped create. Excellence is in every detail.
          </motion.p>
        </div>

        {/* CSS Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div 
                className={`relative group overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 w-full ${image.span}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-medium px-4 py-2 rounded-full border border-white/50 bg-black/20">
                    View
                  </span>
                </div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent shadow-none p-0 overflow-hidden [&>button]:text-white [&>button]:bg-black/50 [&>button]:rounded-full [&>button]:p-2 [&>button]:hover:bg-primary">
          <DialogTitle className="sr-only">Image View</DialogTitle>
          <DialogDescription className="sr-only">A closer look at our portfolio image.</DialogDescription>
          {selectedImage && (
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
