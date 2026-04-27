import React from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';

export const PROPERTY_VALUATION_COMPONENT_ID = '47343f27-b398-4040-8758-d0a4d74c1903';

const PropertyValuationWidget: React.FC<any> = (props) => {
  const record = props?.record || {};
  const price = record?.price?.amountMicros ? record.price.amountMicros / 1_000_000 : 0;
  const sqft = record?.squareFeet || 1;
  const pricePerSqft = price > 0 && sqft > 0 ? Math.round(price / sqft) : 0;

  return (
    <div style={{
      padding: '16px',
      background: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#495057' }}>
        Valuation Metrics
      </h3>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#868e96' }}>Price / sqft</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#212529' }}>
            {pricePerSqft > 0 ? `₹${pricePerSqft.toLocaleString('en-IN')}` : 'N/A'}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#868e96' }}>Total Price</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#212529' }}>
            {price > 0 ? `₹${price.toLocaleString('en-IN')}` : 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: PROPERTY_VALUATION_COMPONENT_ID,
  name: 'property-valuation-widget',
  description: 'Shows price-per-sqft and total price for a property record',
  component: PropertyValuationWidget,
});
