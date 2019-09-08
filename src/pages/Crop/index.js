import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class Index extends PureComponent {
  state = {
    src: null,
    crop: {
      x: 50,
      y: 50,
      unit: '%',
      width: 30,
      height: 50,
    },
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    console.log('complete', crop);
    this.makeClientCrop(crop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  // eslint-disable-next-line react/sort-comp
  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.gif',
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          // eslint-disable-next-line no-console
          console.error('Canvas is empty');
          return;
        }
        // eslint-disable-next-line no-param-reassign
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    const url = 'http://i0.hdslb.com/bfs/face/7b5b397d302dea10ad0515b5ef1594ed23c2e7b4.jpg';

    return (
      <div className="App">
        <div>
          <input type="file" onChange={this.onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            imageStyle={{ height: 200 }}
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
      </div>
    );
  }
}
export default Index;
