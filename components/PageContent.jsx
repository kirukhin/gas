
export default function PageContent({
    children,
    className = "",
    width = "standard",
  }) {
    const widths = {
      narrow: "page-content--narrow",
      standard: "page-content--standard",
      wide: "page-content--wide",
    };
  
    const widthClass = widths[width] || widths.standard;
  
    return (
      <div className={`page-content ${widthClass} ${className}`}>
        {children}
      </div>
    );
  }
  