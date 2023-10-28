import { supabase } from "@/components/client";

export const getOrFindConversation = async (
  memberOneId: string,
  memberTwoId: string
) => {
  const data =
    (await findConversation(memberOneId, memberTwoId)) ||
    (await findConversation(memberTwoId, memberOneId));
  if (data) return data;
  else return await createConversation(memberOneId, memberTwoId);
};

const findConversation = async (memberOneId: string, memberTwoId: string) => {
  try {
    const { data: conversationData, error: conError } = await supabase
      .from("Conversation")
      .select("memberOneId, memberTwoId,id")
      .eq("memberOneId", memberOneId)
      .eq("memberTwoId", memberTwoId);
    if (conError) return null;
    if (conversationData.length) return conversationData[0];
    return null;
  } catch (error) {
    return null;
  }
};

const createConversation = async (memberOneId: string, memberTwoId: string) => {
  try {
    const { data: conversationData, error: conError } = await supabase
      .from("Conversation")
      .insert([
        {
          memberOneId,
          memberTwoId,
        },
      ])
      .select();
    if (conError) return null;
    if (conversationData.length) return conversationData[0];
  } catch (error) {
    return null;
  }
};
