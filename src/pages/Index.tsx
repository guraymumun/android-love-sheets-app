import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Capacitor } from '@capacitor/core';
const Index = () => {
  useEffect(() => {
    // Initialize any native functionality here
    document.title = "Lovable Android App Module";
  }, []);
  const openCheatSheets = () => {
    if (Capacitor.isNativePlatform()) {
      // Use the native browser to open the URL
      window.open("https://www.lecturio.com/wl/nursing-cheat-sheets/?webview=1", "_system");
    } else {
      // Fallback for web
      window.open("https://www.lecturio.com/wl/nursing-cheat-sheets/?webview=1", "_blank");
    }
  };
  return <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="p-6 mb-6 bg-white rounded-none">
          <h1 className="text-2xl font-bold text-center text-[#1379c8]">Lovable Android App Module</h1>
        </div>
        
        <Button className="w-full bg-[#1379C8] hover:bg-[#1167A8] text-white font-bold py-4 rounded" onClick={openCheatSheets}>
          CHEAT SHEETS
        </Button>
      </Card>
    </div>;
};
export default Index;