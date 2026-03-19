-- Allow public viewing of all appointments (already mostly open, but ensuring consistency)
DROP POLICY IF EXISTS "Anyone can view their own appointments" ON public.appointments;
DROP POLICY IF EXISTS "Admins can view all appointments" ON public.appointments;

CREATE POLICY "Anyone can view all appointments"
ON public.appointments
FOR SELECT
USING (true);

-- Allow public updates to appointments for status changes
CREATE POLICY "Anyone can update appointment status"
ON public.appointments
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Update project orders policies to allow public viewing and updating
DROP POLICY IF EXISTS "Admins can view all orders" ON public.project_orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON public.project_orders;
DROP POLICY IF EXISTS "Admins can update orders" ON public.project_orders;

CREATE POLICY "Anyone can view all project orders"
ON public.project_orders
FOR SELECT
USING (true);

CREATE POLICY "Anyone can update project order status"
ON public.project_orders
FOR UPDATE
USING (true)
WITH CHECK (true);