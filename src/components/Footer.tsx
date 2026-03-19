const Footer = () => {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Denilson Lopez. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
