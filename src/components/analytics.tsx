
export default function Analytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SGSMS8T369"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);};
        gtag('js', new Date());
        gtag('config', 'G-SGSMS8T369');
        `}
      </script>
    </>
  )
}