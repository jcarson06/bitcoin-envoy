-- Create consultation_requests table
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create policies for consultation_requests
-- Allow anyone to insert (for the public form)
CREATE POLICY "Anyone can submit consultation requests" 
ON public.consultation_requests 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (admin) can view requests
CREATE POLICY "Authenticated users can view consultation requests" 
ON public.consultation_requests 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Only authenticated users (admin) can update requests
CREATE POLICY "Authenticated users can update consultation requests" 
ON public.consultation_requests 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_consultation_requests_updated_at
  BEFORE UPDATE ON public.consultation_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add status constraint to ensure valid values
ALTER TABLE public.consultation_requests 
ADD CONSTRAINT valid_status CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled'));