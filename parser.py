import sys
import json
import fileinput

class parseError(Exception):
	def __init__(self, obj):
		obj.state = 0

class parser:
	def __init__(self):
		self.parsedProgram = []
		self.parsedObject = {}
		self.state = 0
		self.name = None
		self.params = {}

	def parse(self, command):
		command = command.split(" ",2)
		if command[0] == "START":
			if command[1] == "course" and self.state == 0:
				self.name = "add"
				self.params = {}
				self.params['type'] = 'course'
				self.state = 1
			elif command[1] == "module" and self.state == 0:
				self.name = "add"
				self.params = {}
				self.params['type'] = 'module'
				self.state = 1
			elif command[1] == "params" and self.state == 1:
				self.state = 2
			elif command[1] == "attributes" and self.state == 2:
				self.params['attributes'] = []
				self.state = 3
			else:
				raise parseError(self)
		elif command[0] == "END":
			if command[1] == "course" and self.state == 1:
				self.parsedObject['name']=self.name
				self.parsedObject['params']=self.params
				self.parsedProgram.append(self.parsedObject)
				self.parsedObject = {}
				self.state = 0
			elif command[1] == "module" and self.state == 1:
				self.parsedObject['name']=self.name
				self.parsedObject['params']=self.params
				self.parsedProgram.append(self.parsedObject)
				self.parsedObject = {}
				self.state = 0
			elif command[1] == "params" and self.state == 2:
				self.state = 1
			elif command[1] == "attributes" and self.state == 3:
				self.state = 2
			else:
				raise parseError(self)
		elif command[0] == "DEFINE" and self.state == 2:
			temp = {}
			self.params[command[1]]=command[2].strip('"')
		elif command[0] == "ADD" and self.state == 3:
			temp = {}
			temp[command[1]]=command[2].strip('"')
			self.params['attributes'].append(temp)
		else:
			raise parseError(self)

def main():
	p = parser()
	for command in fileinput.input():
		try:
			print command.strip()
			p.parse(command.strip())
		except:
			print "Error in parsing:", command
			break
	print p.parsedProgram

if __name__ == "__main__":
	main()
