import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM } from "@/lib/resend";
import TemplateSubmissionEmail from "@/emails/template-submission";
import TemplateConfirmationEmail from "@/emails/template-submitted-confirmation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      templateName, description, platform, tierSuggestion,
      authorName, authorEmail, authorTwitter,
      agentsContent, soulContent, memoryContent,
    } = body;

    if (!templateName?.trim() || templateName.trim().length < 3)
      return NextResponse.json({ error: "Template name is required (min 3 chars)" }, { status: 400 });
    if (!description?.trim() || description.trim().length < 20)
      return NextResponse.json({ error: "Description is required (min 20 chars)" }, { status: 400 });
    if (!platform)
      return NextResponse.json({ error: "Platform is required" }, { status: 400 });
    if (!tierSuggestion)
      return NextResponse.json({ error: "Tier suggestion is required" }, { status: 400 });
    if (!authorName?.trim() || authorName.trim().length < 2)
      return NextResponse.json({ error: "Author name is required" }, { status: 400 });
    if (!authorEmail?.includes("@"))
      return NextResponse.json({ error: "Valid author email is required" }, { status: 400 });
    if (!agentsContent?.trim() || agentsContent.trim().length < 10)
      return NextResponse.json({ error: "AGENTS.md content is required" }, { status: 400 });
    if (!soulContent?.trim() || soulContent.trim().length < 10)
      return NextResponse.json({ error: "SOUL.md content is required" }, { status: 400 });
    if (!memoryContent?.trim() || memoryContent.trim().length < 10)
      return NextResponse.json({ error: "MEMORY.md content is required" }, { status: 400 });

    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
    console.log(`[templates/submit] "${templateName}" by ${authorName} <${authorEmail}>`);

    if (resend) {
      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: "trietphan85@gmail.com",
          subject: `[AgentAwake] New Template Submission: ${templateName}`,
          react: TemplateSubmissionEmail({
            templateName: templateName.trim(), description: description.trim(),
            platform, tierSuggestion,
            authorName: authorName.trim(), authorEmail: authorEmail.trim(),
            authorTwitter: authorTwitter?.trim() || undefined,
            agentsContent: agentsContent.trim(), soulContent: soulContent.trim(),
            memoryContent: memoryContent.trim(), submittedAt,
          }),
        });
      } catch (err) {
        console.error("[templates/submit] Admin email failed:", err);
      }

      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: authorEmail.trim(),
          subject: `We got your template — ${templateName} ⚡`,
          react: TemplateConfirmationEmail({
            authorName: authorName.trim(), templateName: templateName.trim(),
          }),
        });
      } catch (err) {
        console.error("[templates/submit] Confirmation email failed:", err);
      }
    } else {
      console.warn("[templates/submit] Resend not configured — emails skipped");
    }

    return NextResponse.json({
      success: true,
      message: "Template submitted! We'll review it within 3–5 business days.",
    });
  } catch (err) {
    console.error("[templates/submit] Error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
