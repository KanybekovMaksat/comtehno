import { useEffect } from "react";
import { Card } from "@mui/material";

const MapBlock: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.2gis.com/js/DGWidgetLoader.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto p-4 shadow-lg rounded-xl">
      <div
        className="w-full h-96"
        id="map-container"
        dangerouslySetInnerHTML={{
          __html: `<div class="dg-widget" data-src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%5B37.6173%2C55.7558%5D%2C%22zoom%22%3A13%2C%22org%22%3A%5B%5D%7D" style="width: 100%; height: 100%;"></div>`,
        }}
      />
    </Card>
  );
};

export default MapBlock;
