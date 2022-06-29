import CloseIcon from '@mui/icons-material/Clear';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import './index.scss';

export default function FrameOperation() {
  const handleFrameOperation = (type: string) => {
    if (type === 'minimize') {
      window.electron.ipcRenderer.sendMessage('window-minimize', []);
    }
    if (type === 'fullscreen') {
      window.electron.ipcRenderer.sendMessage('window-fullscreen', []);
    }
    if (type === 'close') {
      window.electron.ipcRenderer.sendMessage('window-close', []);
    }
  };
  return (
    <div className="frame__operations">
      <button
        type="button"
        onClick={() => handleFrameOperation('minimize')}
        aria-hidden
        tabIndex={-1}
      >
        <HorizontalRuleIcon sx={{ color: '484848', fontSize: '16px' }} />
      </button>
      <button
        type="button"
        onClick={() => handleFrameOperation('fullscreen')}
        aria-hidden
        tabIndex={-1}
      >
        <FullscreenIcon sx={{ color: '484848', fontSize: '16px' }} />
      </button>
      <button
        type="button"
        onClick={() => handleFrameOperation('close')}
        aria-hidden
        tabIndex={-1}
      >
        <CloseIcon sx={{ color: '484848', fontSize: '16px' }} />
      </button>
    </div>
  );
}
