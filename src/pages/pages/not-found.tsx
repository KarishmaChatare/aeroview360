import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">404</p>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-full px-8 h-12 font-semibold shadow-[0_0_24px_rgba(27,174,232,0.25)]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
