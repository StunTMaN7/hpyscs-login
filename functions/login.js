export async function onRequestPost(context) {
  const formData = await context.request.formData();
  const password = formData.get("password");

  if (password === "Happy$cienceIRAN2025") {
    return Response.redirect("https://docs.google.com/spreadsheets/d/1Q3o0KLWA1kq3qWHxcSKIwvZYKJfP5o-lundhOYVSX9k/edit?usp=sharing", 302);
  }

  return new Response("رمز اشتباه است!", { status: 401 });
}