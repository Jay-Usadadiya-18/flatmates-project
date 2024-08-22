import 'package:flutter/material.dart';

class MessagePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Messages'),
      ),
      body: ListView(
        children: [
          ListTile(
            leading: CircleAvatar(),
            title: Text('Daniel'),
            subtitle: Text('Hey There!'),
            onTap: () {
              // Navigate to chat screen
            },
          ),
          ListTile(
            leading: CircleAvatar(),
            title: Text('Jessie Lambert'),
            subtitle: Text('How are you?'),
            onTap: () {
              // Navigate to chat screen
            },
          ),
          // Add more ListTiles here
        ],
      ),
    );
  }
}
