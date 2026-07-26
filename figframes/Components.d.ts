// Components.d.ts — the complete catalog of the 15 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Add) and usable directly in JSX.
import * as React from 'react';

// figma layer: "add" (node 207:7529)
export interface AddProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "arrow-down" (node 42:5495)
export interface ArrowDownProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "Button - Content Area" (node 9:1796)
export interface ButtonContentAreaProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "sm" | "md" | "lg";
  destructive?: boolean;
  symbol?: string;
  style2?: "bordered - prominent" | "bordered" | "bordered - secondary" | "borderless";
  enabled?: boolean;
  instance?: React.ReactNode;
  labelType?: "symbol + text" | "symbol" | "text";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Comments" (node 42:4669)
export interface CommentsProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "eye" (node 284:10459)
export interface EyeProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "Grid" (node 42:4944)
export interface GridProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "heart" (node 42:5036)
export interface HeartProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "home" (node 5:3)
export interface HomeProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "Home" (node 15:4505)
export interface Home3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Inbox" (node 5:41)
export interface InboxProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

// figma layer: "Jar Detail [View]" (node 1763:2350)
export interface JarDetailViewProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "jar-icon" (node 596:3457)
export interface JarIconProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "linear" | "bold";
}

// figma layer: "Jars [ Owned]" (node 193:7201)
export interface JarsOwnedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Segmented control" (node 9:2626)
export interface SegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  label1?: string;
  segments?: "2" | "3" | "4" | "5";
  label5?: string;
  label2?: string;
  selected?: "1" | "2" | "3" | "4" | "5";
  label4?: string;
  label3?: string;
}

// figma layer: "volume-slash" (node 1175:4836)
export interface VolumeSlashProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}

declare const Add: React.FC<AddProps>;
declare const ArrowDown: React.FC<ArrowDownProps>;
declare const ButtonContentArea: React.FC<ButtonContentAreaProps>;
declare const Comments: React.FC<CommentsProps>;
declare const Eye: React.FC<EyeProps>;
declare const Grid: React.FC<GridProps>;
declare const Heart: React.FC<HeartProps>;
declare const Home: React.FC<HomeProps>;
declare const Home3: React.FC<Home3Props>;
declare const Inbox: React.FC<InboxProps>;
declare const JarDetailView: React.FC<JarDetailViewProps>;
declare const JarIcon: React.FC<JarIconProps>;
declare const JarsOwned: React.FC<JarsOwnedProps>;
declare const SegmentedControl: React.FC<SegmentedControlProps>;
declare const VolumeSlash: React.FC<VolumeSlashProps>;
declare global {
  interface Window {
    Add: React.FC<AddProps>;
    ArrowDown: React.FC<ArrowDownProps>;
    ButtonContentArea: React.FC<ButtonContentAreaProps>;
    Comments: React.FC<CommentsProps>;
    Eye: React.FC<EyeProps>;
    Grid: React.FC<GridProps>;
    Heart: React.FC<HeartProps>;
    Home: React.FC<HomeProps>;
    Home3: React.FC<Home3Props>;
    Inbox: React.FC<InboxProps>;
    JarDetailView: React.FC<JarDetailViewProps>;
    JarIcon: React.FC<JarIconProps>;
    JarsOwned: React.FC<JarsOwnedProps>;
    SegmentedControl: React.FC<SegmentedControlProps>;
    VolumeSlash: React.FC<VolumeSlashProps>;
  }
}
