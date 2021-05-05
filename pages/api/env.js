// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const {
    NEXTAUTH_URL,
    JWT_SECRET,
    AZURE_TENANT_NAME,
    AZURE_TENANT_ID,
    AZURE_CLIENT_ID,
    AZURE_CLIENT_SECRET,
    AZURE_USER_FLOW,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET
  } = process.env


  res.status(200).json({
    NEXTAUTH_URL,
    JWT_SECRET,
    AZURE_TENANT_NAME,
    AZURE_TENANT_ID,
    AZURE_CLIENT_ID,
    AZURE_CLIENT_SECRET,
    AZURE_USER_FLOW,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET
  })
}