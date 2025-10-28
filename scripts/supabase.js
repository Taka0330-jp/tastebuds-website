import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "/scripts/config.js";

// client
 const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// test
 async function testSupabase() {
    const {data, error} = await supabase.from("comments").select("*").limit(1);
    if(error) throw error;
    return data;
}

// get comment

 async function listComments(postId, limit = 50) {
  const { data, error } = await supabase
    .from("comments")
    .select("id, author_name, body, created_at")
    .eq("post_id", postId)
    .order("created_at", { ascending: true })
    .limit(limit);
  if (error) throw error;
  return data;
}

//add comment
 async function addComment({ postId, authorName, body }) {
  const { error } = await supabase
    .from("comments")
    .insert([{ post_id: postId, author_name: authorName ?? null, body }]);
  if (error) throw error;
}

  testSupabase()
    .then(d => console.log("✅ Supabase OK:", d))
    .catch(e => console.error("❌ Supabase NG:", e));

    const POST_ID = location.pathname || "/";
  listComments(POST_ID).then(rows => console.log("📥 comments:", rows));