export function customStyle(index: number) {
  return { '--item-nb': index } as React.CSSProperties;
}

export function getWheelVars(length: number, selectedIndex: number) {
  return {
    '--nb-item': length,
    '--selected-item': selectedIndex,
  } as React.CSSProperties;
}

export function isTouchScreendevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export function getFormattedResult(selectedIndex: number) {
  const currentTimestamp = new Date();
  const resultData = {
    webclient: 'mobile-pwa',
    timestamp: currentTimestamp,
    spinResultIndex: selectedIndex,
  };
  return resultData;
}

export function getPositionFromCenter(event: any, boxCenterPoint: any) {
  let clientX, clientY;
  if (event.targetTouches && event.targetTouches[0]) {
    clientX = event.targetTouches[0].pageX;
    clientY = event.targetTouches[0].pageY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }
  const fromBoxCenter = {
    x: clientX - boxCenterPoint.x,
    y: -(clientY - boxCenterPoint.y),
  };
  return fromBoxCenter;
}
