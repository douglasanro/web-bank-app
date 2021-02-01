import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  return { toggle, open };
};

export default useModal;
