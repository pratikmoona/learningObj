<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
	<h1>List of Courses</h1>
	<ul>
		<xsl:for-each select="courses/course">
			<li><a><xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute><xsl:value-of select="title" /></a></li>
		</xsl:for-each>
	</ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
