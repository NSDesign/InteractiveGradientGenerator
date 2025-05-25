import React, { useState } from 'react';
import './GradientGenerator.css';

interface GradientPosition {
  x: number;
  y: number;
}

type GradientType = 'linear' | 'radial' | 'conic' | 'reflected';

const GradientGenerator: React.FC = () => {
  const [gradientType, setGradientType] = useState<GradientType>('linear');
  const [startColor, setStartColor] = useState<string>('#ff5f6d');
  const [endColor, setEndColor] = useState<string>('#ffc371');
  const [scale, setScale] = useState<number>(100);
  const [angle, setAngle] = useState<number>(90);
  const [position, setPosition] = useState<GradientPosition>({ x: 50, y: 50 });

  // Construct gradient based on type and parameters
  const getGradientStyle = (): React.CSSProperties => {
    const scaleTransform = `scale(${scale / 100})`;
    const scaleStyle = {
      width: '100%',
      height: '100%',
      transform: scaleTransform,
      transformOrigin: `${position.x}% ${position.y}%`,
    };

    let gradientValue = '';
    
    switch (gradientType) {
      case 'linear':
        gradientValue = `linear-gradient(${angle}deg, ${startColor}, ${endColor})`;
        break;
      case 'radial':
        gradientValue = `radial-gradient(circle at ${position.x}% ${position.y}%, ${startColor}, ${endColor})`;
        break;
      case 'conic':
        gradientValue = `conic-gradient(from ${angle}deg at ${position.x}% ${position.y}%, ${startColor}, ${endColor})`;
        break;
      case 'reflected':
        // Simulated reflected gradient using multiple color stops
        gradientValue = `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
        break;
      default:
        gradientValue = `linear-gradient(${angle}deg, ${startColor}, ${endColor})`;
    }
    
    return {
      ...scaleStyle,
      background: gradientValue,
    };
  };

  // CSS Code output
  const generateCssCode = (): string => {
    let cssCode = '';
    
    switch (gradientType) {
      case 'linear':
        cssCode = `background: linear-gradient(${angle}deg, ${startColor}, ${endColor});`;
        break;
      case 'radial':
        cssCode = `background: radial-gradient(circle at ${position.x}% ${position.y}%, ${startColor}, ${endColor});`;
        break;
      case 'conic':
        cssCode = `background: conic-gradient(from ${angle}deg at ${position.x}% ${position.y}%, ${startColor}, ${endColor});`;
        break;
      case 'reflected':
        cssCode = `background: linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor});`;
        break;
      default:
        cssCode = `background: linear-gradient(${angle}deg, ${startColor}, ${endColor});`;
    }
    
    if (scale !== 100) {
      cssCode += `\ntransform: scale(${scale / 100});
transform-origin: ${position.x}% ${position.y}%;`;
    }
    
    return cssCode;
  };

  return (
    <div className="gradient-container">
      <h2 className="title">Interactive Gradient Generator</h2>
      
      {/* Controls */}
      <div className="controls">
        <div className="control-row">
          <label className="control-label">Gradient Type:</label>
          <select 
            value={gradientType}
            onChange={(e) => setGradientType(e.target.value as GradientType)}
            className="select-input"
          >
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
            <option value="conic">Conic</option>
            <option value="reflected">Reflected</option>
          </select>
        </div>
        
        <div className="control-row">
          <label className="control-label">Start Color:</label>
          <input 
            type="color"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
            className="color-picker"
          />
          <input 
            type="text"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
            className="text-input color-text"
          />
        </div>
        
        <div className="control-row">
          <label className="control-label">End Color:</label>
          <input 
            type="color"
            value={endColor}
            onChange={(e) => setEndColor(e.target.value)}
            className="color-picker"
          />
          <input 
            type="text"
            value={endColor}
            onChange={(e) => setEndColor(e.target.value)}
            className="text-input color-text"
          />
        </div>
        
        <div className="control-row">
          <label className="control-label">Scale:</label>
          <input 
            type="range"
            min="0"
            max="500"
            value={scale}
            onChange={(e) => setScale(parseInt(e.target.value))}
            className="range-input"
          />
          <span className="value-display">{scale}%</span>
        </div>
        
        {(gradientType === 'linear' || gradientType === 'conic' || gradientType === 'reflected') && (
          <div className="control-row">
            <label className="control-label">Angle:</label>
            <input 
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="value-display">{angle}°</span>
          </div>
        )}
        
        {(gradientType === 'radial' || gradientType === 'conic') && (
          <>
            <div className="control-row">
              <label className="control-label">Position X:</label>
              <input 
                type="range"
                min="0"
                max="100"
                value={position.x}
                onChange={(e) => setPosition({...position, x: parseInt(e.target.value)})}
                className="range-input"
              />
              <span className="value-display">{position.x}%</span>
            </div>
            
            <div className="control-row">
              <label className="control-label">Position Y:</label>
              <input 
                type="range"
                min="0"
                max="100"
                value={position.y}
                onChange={(e) => setPosition({...position, y: parseInt(e.target.value)})}
                className="range-input"
              />
              <span className="value-display">{position.y}%</span>
            </div>
          </>
        )}
      </div>
      
      {/* Preview */}
      <div className="preview-container">
        <div style={getGradientStyle()}></div>
      </div>
      
      {/* CSS Code */}
      <div className="code-section">
        <h3 className="code-title">CSS Code:</h3>
        <pre className="code-block">
          {generateCssCode()}
        </pre>
      </div>
    </div>
  );
};

export default GradientGenerator;
