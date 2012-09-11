import sys
import json
import fileinput

class parseError(Exception):
	def __init__(self):
		self.command=None

class parser:
	def __init__(self):
		self.parsedProgram = []
		self.parsedObject = {}
		self.state = 0
		self.name = None
		self.params = {}

	def parse(self, command):
		if command == "START module" and self.state == 0:
			self.name = "add"
			self.state = 1
		elif command == "START params" and self.state == 1:
			self.params = {}
			self.params['type'] = 'module'
			self.state = 2
		elif command == "START attributes" and self.state == 2:
			self.params['attributes'] = []
			self.state = 3
		elif command == "END module" and self.state == 1:
			self.parsedObject['name']=self.name
			self.parsedObject['params']=self.params
			self.parsedProgram.append(self.parsedObject)
			self.parsedObject = {}
			self.state = 0
		elif command == "END params" and self.state == 2:
			self.state = 1
		elif command == "END attributes" and self.state == 3:
			self.state = 2	
		elif self.state == 2:
			command = command.split(" ",2)
			if command[0] == "DEFINE":
				temp = {}
				self.params[command[1]]=command[2].strip('"')
			else:
				raise parseError()
				self.state = 0
			self.state = 2
		elif self.state == 3:
			command = command.split(" ",2)
			if command[0] == "ADD":
				temp = {}
				temp[command[1]]=command[2].strip('"')
				self.params['attributes'].append(temp)
			else:
				raise parseError()
				self.state = 0
			self.state = 3
		else:
			raise parseError()
			self.state = 0

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
