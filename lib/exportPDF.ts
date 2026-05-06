export async function exportToPDF(elementId: string, filename: string) {
  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    // Add subsequent pages if content is long
    while (heightLeft >= 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    // Add Footer to every page
    const pageCount = pdf.internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(
        "Prepared for campaign presentation and strategic planning. AI Powered by Northly AI",
        pdfWidth / 2,
        pdf.internal.pageSize.getHeight() - 10,
        { align: "center" }
      );
    }

    pdf.save(filename);
  } catch (error) {
    console.error("PDF generation failed:", error);
  }
}
