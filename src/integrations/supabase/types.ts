export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          created_at: string
          date: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          status: string
          time_slot: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          date: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          status?: string
          time_slot: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          date?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          status?: string
          time_slot?: string
          updated_at?: string
        }
        Relationships: []
      }
      coupon_redemptions: {
        Row: {
          coupon_id: string | null
          created_at: string | null
          discount_applied: number
          id: string
          order_id: string | null
          user_email: string
        }
        Insert: {
          coupon_id?: string | null
          created_at?: string | null
          discount_applied: number
          id?: string
          order_id?: string | null
          user_email: string
        }
        Update: {
          coupon_id?: string | null
          created_at?: string | null
          discount_applied?: number
          id?: string
          order_id?: string | null
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_redemptions_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coupon_redemptions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "project_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          applicable_categories: string[] | null
          code: string
          created_at: string | null
          discount_type: string
          discount_value: number
          end_date: string | null
          id: string
          is_active: boolean | null
          min_purchase: number | null
          start_date: string | null
          updated_at: string | null
          usage_limit: number | null
          used_count: number | null
        }
        Insert: {
          applicable_categories?: string[] | null
          code: string
          created_at?: string | null
          discount_type: string
          discount_value: number
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          min_purchase?: number | null
          start_date?: string | null
          updated_at?: string | null
          usage_limit?: number | null
          used_count?: number | null
        }
        Update: {
          applicable_categories?: string[] | null
          code?: string
          created_at?: string | null
          discount_type?: string
          discount_value?: number
          end_date?: string | null
          id?: string
          is_active?: boolean | null
          min_purchase?: number | null
          start_date?: string | null
          updated_at?: string | null
          usage_limit?: number | null
          used_count?: number | null
        }
        Relationships: []
      }
      course_bookings: {
        Row: {
          course_id: string
          course_name: string
          created_at: string
          email: string
          id: string
          phone: string
          status: string
          time_preference: string
          updated_at: string
          user_name: string
        }
        Insert: {
          course_id: string
          course_name: string
          created_at?: string
          email: string
          id?: string
          phone: string
          status?: string
          time_preference: string
          updated_at?: string
          user_name: string
        }
        Update: {
          course_id?: string
          course_name?: string
          created_at?: string
          email?: string
          id?: string
          phone?: string
          status?: string
          time_preference?: string
          updated_at?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_bookings_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          category: string
          created_at: string
          description: string
          difficulty: string
          duration: string
          id: string
          instructor: string | null
          is_featured: boolean | null
          name: string
          price: number
          tech_tags: string[] | null
          thumbnail_url: string | null
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          difficulty: string
          duration: string
          id?: string
          instructor?: string | null
          is_featured?: boolean | null
          name: string
          price: number
          tech_tags?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          difficulty?: string
          duration?: string
          id?: string
          instructor?: string | null
          is_featured?: boolean | null
          name?: string
          price?: number
          tech_tags?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      project_analytics: {
        Row: {
          created_at: string
          event_type: string
          id: string
          project_id: string | null
          user_info: Json | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          project_id?: string | null
          user_info?: Json | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          project_id?: string | null
          user_info?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "project_analytics_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_orders: {
        Row: {
          amount: number
          client_email: string
          client_name: string
          client_phone: string | null
          college_id_image_url: string | null
          college_roll_number: string | null
          created_at: string
          id: string
          invoice_generated_at: string | null
          invoice_number: string | null
          is_student_discount: boolean | null
          original_amount: number | null
          payment_date: string | null
          payment_method: string | null
          payment_phone: string | null
          payment_status: string | null
          project_description: string | null
          project_title: string
          status: string
          transaction_id: string | null
          updated_at: string
          upi_id: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          client_email: string
          client_name: string
          client_phone?: string | null
          college_id_image_url?: string | null
          college_roll_number?: string | null
          created_at?: string
          id?: string
          invoice_generated_at?: string | null
          invoice_number?: string | null
          is_student_discount?: boolean | null
          original_amount?: number | null
          payment_date?: string | null
          payment_method?: string | null
          payment_phone?: string | null
          payment_status?: string | null
          project_description?: string | null
          project_title: string
          status?: string
          transaction_id?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          client_email?: string
          client_name?: string
          client_phone?: string | null
          college_id_image_url?: string | null
          college_roll_number?: string | null
          created_at?: string
          id?: string
          invoice_generated_at?: string | null
          invoice_number?: string | null
          is_student_discount?: boolean | null
          original_amount?: number | null
          payment_date?: string | null
          payment_method?: string | null
          payment_phone?: string | null
          payment_status?: string | null
          project_description?: string | null
          project_title?: string
          status?: string
          transaction_id?: string | null
          updated_at?: string
          upi_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string
          created_at: string
          description: string
          difficulty: string
          discount_percentage: number | null
          documentation_url: string | null
          domain: string
          has_discount: boolean
          id: string
          is_active: boolean
          preview_video_url: string | null
          price: number
          purchase_count: number
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          view_count: number
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          difficulty?: string
          discount_percentage?: number | null
          documentation_url?: string | null
          domain: string
          has_discount?: boolean
          id?: string
          is_active?: boolean
          preview_video_url?: string | null
          price: number
          purchase_count?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          view_count?: number
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          difficulty?: string
          discount_percentage?: number | null
          documentation_url?: string | null
          domain?: string
          has_discount?: boolean
          id?: string
          is_active?: boolean
          preview_video_url?: string | null
          price?: number
          purchase_count?: number
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          view_count?: number
        }
        Relationships: []
      }
      reviews: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean | null
          item_id: string
          item_type: string
          rating: number
          review_text: string | null
          reviewer_email: string
          reviewer_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          item_id: string
          item_type: string
          rating: number
          review_text?: string | null
          reviewer_email: string
          reviewer_name: string
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          item_id?: string
          item_type?: string
          rating?: number
          review_text?: string | null
          reviewer_email?: string
          reviewer_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      website_analytics: {
        Row: {
          browser: string | null
          city: string | null
          country: string | null
          created_at: string
          device_type: string | null
          id: string
          page_path: string
          page_title: string | null
          referrer: string | null
          user_agent: string | null
        }
        Insert: {
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          page_path: string
          page_title?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Update: {
          browser?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          device_type?: string | null
          id?: string
          page_path?: string
          page_title?: string | null
          referrer?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
