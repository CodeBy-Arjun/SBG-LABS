import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string | null;
  created_at: string;
}

interface ReviewsSectionProps {
  itemId: string;
  itemType: "project" | "course";
}

export default function ReviewsSection({ itemId, itemType }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    fetchReviews();
  }, [itemId]);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from("reviews" as any)
        .select("id, reviewer_name, rating, review_text, created_at")
        .eq("item_id", itemId)
        .eq("item_type", itemType)
        .order("created_at", { ascending: false }) as { data: Review[] | null; error: any };

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in your name and email");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("reviews" as any)
        .insert({
          item_id: itemId,
          item_type: itemType,
          reviewer_name: name.trim(),
          reviewer_email: email.trim(),
          rating,
          review_text: reviewText.trim() || null,
        });

      if (error) throw error;

      toast.success("Review submitted successfully!");
      setName("");
      setEmail("");
      setRating(0);
      setReviewText("");
      setShowForm(false);
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review");
    } finally {
      setSubmitting(false);
    }
  };

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Reviews & Ratings</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${s <= Math.round(Number(avgRating)) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {avgRating} ({reviews.length} review{reviews.length !== 1 ? "s" : ""})
            </span>
          </div>
        </div>
        <Button onClick={() => setShowForm(!showForm)} variant="outline">
          Write a Review
        </Button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(s)}
                      >
                        <Star
                          className={`h-8 w-8 transition-colors cursor-pointer ${
                            s <= (hoverRating || rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input placeholder="Your Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <Textarea placeholder="Write your review (optional)" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                  <Button type="submit" disabled={submitting} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {submitting ? "Submitting..." : "Submit Review"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {loading ? (
        <p className="text-center text-muted-foreground">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">{review.reviewer_name}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex mt-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`h-4 w-4 ${s <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      {review.review_text && (
                        <p className="text-sm text-muted-foreground">{review.review_text}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
