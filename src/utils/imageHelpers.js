export const processImageFile = (file) => {
  return new Promise((resolve, reject) => {
    // Validate file type
    if (!file.type.match(/image\/(png|jpeg|jpg|webp)/)) {
      reject(new Error('Please upload a valid PNG or JPG image.'));
      return;
    }

    // Validate size (max 2MB for browser memory safety)
    if (file.size > 2 * 1024 * 1024) {
      reject(new Error('Please choose a smaller image (under 2MB).'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 300;
        const MAX_HEIGHT = 300;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to data URL
        const dataUrl = canvas.toDataURL('image/png');
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
};