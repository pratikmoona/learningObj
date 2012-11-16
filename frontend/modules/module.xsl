<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
	<h1>Module : <xsl:value-of select="module/title" /></h1>
		<xsl:for-each select="module/attributes/attribute">
			<xsl:if test="type='text'">
				<p><xsl:value-of select="data" /></p>
			</xsl:if>
			<xsl:if test="type='image'">
				<center><img><xsl:attribute name="src"><xsl:value-of select="data" /></xsl:attribute></img></center>
			</xsl:if>
			<xsl:if test="type='youtube'">
				<xsl:value-of select="data" />
			</xsl:if>
		</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
