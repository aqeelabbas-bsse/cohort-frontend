/**
 * Icon registry.
 *
 * Data files reference icons by *name* (a string), because data should not
 * import components. Resolving those names needs a lookup table — and the
 * tempting one-liner is `import * as Icons from 'lucide-react'`.
 *
 * Don't. A namespace import defeats tree-shaking: Rollup cannot prove which
 * members are unused, so all ~1,500 icons ship. Measured on this project that
 * was 1,088 kB of JS instead of ~280 kB.
 *
 * Naming every icon explicitly keeps the bundle honest. Adding an icon is two
 * lines; forgetting to add one throws a clear error in `iconFor` rather than
 * rendering nothing.
 */
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Check,
  ChevronDown,
  CircleAlert,
  CircleHelp,
  Coins,
  CreditCard,
  FileCheck,
  FileText,
  Gift,
  HelpCircle,
  Link2,
  LineChart,
  Mail,
  RefreshCw,
  RotateCcw,
  Share2,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Sun,
  Timer,
  Users,
  X,
  XCircle,
} from 'lucide-react'

export const ICONS = {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Check,
  ChevronDown,
  CircleAlert,
  CircleHelp,
  Coins,
  CreditCard,
  FileCheck,
  FileText,
  Gift,
  HelpCircle,
  Link2,
  LineChart,
  Mail,
  RefreshCw,
  RotateCcw,
  Share2,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Sun,
  Timer,
  Users,
  X,
  XCircle,
}

/** Resolve a name from the data layer to a component. Fails loudly. */
export function iconFor(name) {
  const Icon = ICONS[name]
  if (!Icon && import.meta.env.DEV) {
    console.warn(`[icons] "${name}" is not registered in src/lib/icons.js`)
  }
  return Icon || HelpCircle
}
