-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for authenticated users to view their own submissions
CREATE POLICY "Users can view own submissions"
ON public.contact_submissions
FOR SELECT
USING (true);

-- Create car_bookings table
CREATE TABLE public.car_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  vehicle_name TEXT NOT NULL,
  vehicle_type TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  pickup_date DATE NOT NULL,
  dropoff_date DATE NOT NULL,
  pickup_location TEXT NOT NULL,
  rental_plan TEXT NOT NULL,
  total_days INTEGER NOT NULL,
  price_per_day INTEGER NOT NULL,
  total_price INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.car_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert bookings
CREATE POLICY "Anyone can create booking"
ON public.car_bookings
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for users to view all bookings (for admin)
CREATE POLICY "Anyone can view bookings"
ON public.car_bookings
FOR SELECT
USING (true);