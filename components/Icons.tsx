
import React from 'react';

export const FolderIcon: React.FC<{ open?: boolean }> = ({ open, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500" {...props}>
    {open ? (
      <path d="M19.5 21a3 3 0 003-3v-7.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM3.75 7.5A2.25 2.25 0 016 5.25h2.25a2.25 2.25 0 012.25 2.25v2.25a.75.75 0 00.75.75h3.75a.75.75 0 00.75-.75V7.5a2.25 2.25 0 012.25-2.25H21a.75.75 0 000-1.5h-2.25a3.75 3.75 0 00-3.75 3.75v2.25a2.25 2.25 0 01-2.25 2.25h-3.75a2.25 2.25 0 01-2.25-2.25V7.5z" />
    ) : (
      <path d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.25l-3-3h-3.75A3 3 0 004.5 6v12a3 3 0 003 3h12z" />
    )}
  </svg>
);
export const ProductIcon: React.FC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400" {...props}>
    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l2.965-7.19H4.5a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
  </svg>
);
export const Asset3DIcon: React.FC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-400" {...props}>
    <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-4.6-4.6a.75.75 0 00-1.06 1.061l5.69 5.69H5.25a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H12.75v-5.69l5.69 5.69a.75.75 0 101.06-1.061l-5.689-5.69V7.5a.75.75 0 10-1.5 0zM12 22.5a.75.75 0 00.75-.75v-5.25h-1.5V21.75a.75.75 0 00.75.75z" />
  </svg>
);
export const MusicIcon: React.FC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400" {...props}>
    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A9.735 9.735 0 006 21a9.707 9.707 0 005.25-1.533v-1.267a.75.75 0 00-1.5 0v.634a8.23 8.23 0 01-3.75.967 8.23 8.23 0 01-3.75-.967V4.533a8.23 8.23 0 013.75-.967 8.23 8.23 0 013.75.967v12.019a.75.75 0 001.5 0V5.24a.75.75 0 00-.5-.707z" />
    <path d="M12.75 6a.75.75 0 00-1.5 0v12a.75.75 0 001.5 0V6z" />
    <path d="M15 8.25a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5z" />
    <path d="M18.75 9.75a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z" />
  </svg>
);
export const ContactIcon: React.FC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400" {...props}>
    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A.75.75 0 017.05 14.5h9.9a.75.75 0 01.74 1.226 13.91 13.91 0 01-11.38 0z" clipRule="evenodd" />
  </svg>
);
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);
export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);
export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
  </svg>
);
export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
);
export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
  </svg>
);
export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-400" {...props}>
    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.46-5.232.75.75 0 00-.674-1.07H8.25l-2.55-9.593A.25.25 0 005.41 2.25H2.25z" />
  </svg>
);
export const FileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400" {...props}>
      <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM12.75 3.161c.264.023.523.078.775.148V5.25c0 .414.336.75.75.75h1.939a.75.75 0 01.75.75v.061c.055.252.11.51.133.775H9.75A2.25 2.25 0 0112 5.25v-.061c.252-.055.51-.11.775-.133z" clipRule="evenodd" />
    </svg>
);
export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.748 1.295 2.535 0 3.284L7.279 20.99c-1.25.722-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
);
export const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);
export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M9.315 7.584C10.533 6.366 12 5.25 12 5.25s1.467 1.116 2.685 2.334c1.218 1.218 2.334 2.685 2.334 2.685s-1.116 1.467-2.334 2.685C13.467 14.134 12 15.25 12 15.25s-1.467-1.116-2.685-2.334C8.1 11.7 6.984 10.233 6.984 10.233s1.116-1.467 2.33-2.65zM12 3.162a.75.75 0 01.624.375l2.022 3.468a.75.75 0 01-.544 1.123h-4.204a.75.75 0 01-.544-1.123L11.376 3.537A.75.75 0 0112 3.162zM21.75 12a.75.75 0 01-.375.624l-3.468 2.022a.75.75 0 01-1.123-.544v-4.204a.75.75 0 011.123-.544l3.468 2.022A.75.75 0 0121.75 12zM12 20.838a.75.75 0 01-.624-.375l-2.022-3.468a.75.75 0 01.544-1.123h4.204a.75.75 0 01.544 1.123l-2.022 3.468a.75.75 0 01-.624.375zM3.162 12a.75.75 0 01.375-.624l3.468-2.022a.75.75 0 011.123.544v4.204a.75.75 0 01-1.123.544L3.537 12.624A.75.75 0 013.162 12z" clipRule="evenodd" />
    </svg>
);

export const DocumentTextIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-400" {...props}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM12.75 3.161c.264.023.523.078.775.148V5.25c0 .414.336.75.75.75h1.939a.75.75 0 01.75.75v.061c.055.252.11.51.133.775H9.75A2.25 2.25 0 0112 5.25v-.061c.252-.055.51-.11.775-.133z" clipRule="evenodd" />
    <path d="M6.75 12.75a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm0 3.75a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75z" />
  </svg>
);

export const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400" {...props}>
    <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
  </svg>
);

export const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400" {...props}>
    <path d="M11.584 2.276a.75.75 0 01.832 0l9 5.25a.75.75 0 01.375.649v10.5a.75.75 0 01-.375.65l-9 5.25a.75.75 0 01-.75 0l-9-5.25a.75.75 0 01-.375-.65V8.175a.75.75 0 01.375-.649l9-5.25z" />
  </svg>
);

export const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600" {...props}>
    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v1.5h12v-1.5a1.5 1.5 0 00-1.5-1.5h-9zM3.75 8.25a.75.75 0 01.75-.75h15a.75.75 0 01.75.75v9.75a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V8.25z" clipRule="evenodd" />
  </svg>
);