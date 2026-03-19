-- Add payment tracking columns to project_orders table
ALTER TABLE project_orders
ADD COLUMN IF NOT EXISTS payment_method TEXT CHECK (payment_method IN ('upi', 'cod', 'phone_pay')) DEFAULT NULL,
ADD COLUMN IF NOT EXISTS payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'failed', 'cod_pending')) DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS upi_id TEXT,
ADD COLUMN IF NOT EXISTS transaction_id TEXT,
ADD COLUMN IF NOT EXISTS payment_phone TEXT,
ADD COLUMN IF NOT EXISTS payment_date TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS invoice_number TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS invoice_generated_at TIMESTAMP WITH TIME ZONE;

-- Create function to auto-generate invoice numbers
CREATE OR REPLACE FUNCTION generate_invoice_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.invoice_number IS NULL THEN
    NEW.invoice_number := 'INV-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(NEXTVAL('invoice_number_seq')::TEXT, 6, '0');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create sequence for invoice numbers
CREATE SEQUENCE IF NOT EXISTS invoice_number_seq START 1;

-- Create trigger to auto-generate invoice numbers on insert
DROP TRIGGER IF EXISTS generate_invoice_number_trigger ON project_orders;
CREATE TRIGGER generate_invoice_number_trigger
  BEFORE INSERT ON project_orders
  FOR EACH ROW
  EXECUTE FUNCTION generate_invoice_number();

-- Add comment for documentation
COMMENT ON COLUMN project_orders.payment_method IS 'Payment method: upi, cod, or phone_pay';
COMMENT ON COLUMN project_orders.payment_status IS 'Payment status: pending, paid, failed, or cod_pending';
COMMENT ON COLUMN project_orders.invoice_number IS 'Auto-generated unique invoice number';
