import React, { useState } from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';

export const PROPERTY_PHOTO_CAROUSEL_ID = 'c8c4d5a5-c9a8-4861-bae9-65e3e7363d9e';

const PropertyPhotoCarousel: React.FC<any> = (props) => {
  const record = props?.record || {};
  const files = record?.files || [];
  const [activeIndex, setActiveIndex] = useState(0);

  // Normalize files array — Twenty stores files as an array of attachment objects
  const imageFiles = Array.isArray(files) ? files : [];

  if (imageFiles.length === 0) {
    return (
      <div style={{
        padding: '24px',
        textAlign: 'center',
        color: '#868e96',
        fontFamily: 'system-ui, sans-serif',
        background: '#f8f9fa',
        borderRadius: '8px',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>📷</div>
        <div>No photos uploaded yet</div>
      </div>
    );
  }

  const activeImage = imageFiles[activeIndex];
  const activeUrl = activeImage?.url || activeImage?.fileUrl || activeImage?.path || '';

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      width: '100%',
    }}>
      {/* Main image */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        background: '#f1f3f5',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {activeUrl ? (
          <img
            src={activeUrl}
            alt={`Property photo ${activeIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={{ color: '#868e96' }}>Image not available</div>
        )}

        {/* Navigation arrows */}
        {imageFiles.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((i) => (i > 0 ? i - 1 : imageFiles.length - 1))}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ‹
            </button>
            <button
              onClick={() => setActiveIndex((i) => (i < imageFiles.length - 1 ? i + 1 : 0))}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Counter badge */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 500,
        }}>
          {activeIndex + 1} / {imageFiles.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      {imageFiles.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '12px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}>
          {imageFiles.map((file: any, idx: number) => {
            const thumbUrl = file?.url || file?.fileUrl || file?.path || '';
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '64px',
                  height: '48px',
                  borderRadius: '6px',
                  border: isActive ? '2px solid #228be6' : '2px solid transparent',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0,
                  background: '#f1f3f5',
                }}
              >
                {thumbUrl ? (
                  <img
                    src={thumbUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '10px', color: '#868e96' }}>No img</div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: PROPERTY_PHOTO_CAROUSEL_ID,
  name: 'property-photo-carousel',
  description: 'Airbnb-style photo carousel for property listings with thumbnails',
  component: PropertyPhotoCarousel,
});
